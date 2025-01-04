from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User
from apps.finance_manager.models import Category

class APITests(APITestCase):
    def setUp(self):
        # Create a test user
        self.user = User.objects.create_user(username="testuser", password="password")
        self.client.login(username="testuser", password="password")
        self.category_data = {"name": "Groceries", "type": "expense"}

    def test_create_category(self):
        # Test category creation
        response = self.client.post("/api/categories/", self.category_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["name"], "Groceries")

    def test_unauthenticated_access(self):
        # Test access without authentication
        self.client.logout()
        response = self.client.get("/api/categories/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
