from django.test import TestCase

from apps.finance_manager.models import Category
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status

class CategoryViewTest(TestCase):

    def setUp(self):
        # Create a user
        self.user = User.objects.create_user(username="testuser", password="password")
        # Log in the user
        self.client.login(username="testuser", password="password")
        # Create a category belonging to this user
        self.category = Category.objects.create(name="Groceries", type="expense", user=self.user)
        # URL for the category list and creation
        self.category_list_url = reverse('category-list')  # Matches the basename and action

    def test_post_detail_status_code(self):
        """Test that the perform_create view returns a 200 status code."""
        # Simulate a POST request to create a new category
        data = {"name": "Utilities", "type": "expense"}
        response = self.client.post(self.category_list_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Category.objects.filter(user=self.user).count(), 2)
        new_category = Category.objects.get(name="Utilities")
        self.assertEqual(new_category.user, self.user)


