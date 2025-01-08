from django.test import TestCase

from apps.finance_manager.models import Category
from django.contrib.auth.models import User


class CategoryModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="testuser", password="password")
        self.category = Category.objects.create(name = "Student loan",
        type = 'income',user=self.user)

    def test_category_creation(self):
        # TODO INVALID INPUT
        """Test if the category is created with the correct info."""
        self.assertEqual(self.category.type, "income")
        self.assertEqual(self.category.name, "Student loan")
        self.assertEqual(self.category.user, self.user)