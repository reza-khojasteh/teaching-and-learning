# Author: Reza Khojasteh
# Date: 08/03/2023
# A unit test for kth_largest.py

import unittest
from kth_largest import kth_largest


class KthLargestTester(unittest.TestCase):
    # test kth_largest with a list of integers
    def test_kth_largest_integers(self):
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 1), 5)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 2), 4)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 3), 3)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 4), 2)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 5), 1)

    # test kth_largest with an empty list
    def test_kth_largest_empty_list(self):
        self.assertEqual(kth_largest([], 1), None)
        self.assertEqual(kth_largest([], 2), None)

    # test kth_largest with a list of integers and a k bigger than the list size
    def test_kth_largest_k_bigger_than_list_size(self):
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 6), None)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 7), None)

    # test kth_largest with a list of integers that have duplicates
    def test_kth_largest_integers_with_duplicates(self):
        self.assertEqual(kth_largest([1, 1, 1, 1, 1], 1), 1)
        self.assertEqual(kth_largest([1, 1, 1, 1, 1], 2), 1)
        self.assertEqual(kth_largest([1, 1, 1, 1, 1], 3), 1)
        self.assertEqual(kth_largest([1, 1, 1, 1, 1], 4), 1)
        self.assertEqual(kth_largest([1, 1, 1, 1, 1], 5), 1)

    # test kth_largest with a k that is less than or equal to 0
    def test_kth_largest_k_less_than_or_equal_to_0(self):
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], 0), None)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], -1), None)
        self.assertEqual(kth_largest([1, 2, 3, 4, 5], -2), None)


if __name__ == '__main__':
    unittest.main()
