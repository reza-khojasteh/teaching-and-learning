<!-- the README.md file for this folder's solution -->
<!-- To be completed -->

# Kth Largest Element in an Array

## Problem Description

Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

## Example 1

Input: `nums = [3,2,1,5,6,4]`, `k = 2`

Output: `5`

## Example 2

Input: `nums = [3,2,3,1,2,4,5,5,6]`, `k = 4`

Output: `4`

## Constraints

- `1 <= k <= nums.length`

## Solution

### Approach 3: Quick Select

    ```python
    class Solution:
        def findKthLargest(self, nums: List[int], k: int) -> int:
            def partition(left, right, pivot_index):
                pivot = nums[pivot_index]
                # 1. move pivot to end
                nums[pivot_index], nums[right] = nums[right], nums[pivot_index]

                # 2. move all smaller elements to the left
                store_index = left
                for i in range(left, right):
                    if nums[i] < pivot:
                        nums[store_index], nums[i] = nums[i], nums[store_index]
                        store_index += 1

                # 3. move pivot to its final place
                nums[right], nums[store_index] = nums[store_index], nums[right]

                return store_index

            def select(left, right, k_smallest):
                """
                Returns the k-th smallest element of list within left..right
                """
                if left == right:       # If the list contains only one element,
                    return nums[left]   # return that element

                # select a random pivot_index
                pivot_index = random.randint(left, right)

                # find the pivot position in a sorted list
                pivot_index = partition(left, right, pivot_index)

                # the pivot is in its final sorted position
                if k_smallest == pivot_index:
                    return nums[k_smallest]
                # go left
                elif k_smallest < pivot_index:
                    return select(left, pivot_index - 1, k_smallest)
                # go right
                else:
                    return select(pivot_index + 1, right, k_smallest)

            # kth largest is (n - k)th smallest
            return select(0, len(nums) - 1, len(nums) - k)
    ```

### Approach 4: Quick Select (Iterative)

    ```python
    class Solution:
        def findKthLargest(self, nums: List[int], k: int) -> int:
            def partition(left, right, pivot_index):
                pivot = nums[pivot_index]
                # 1. move pivot to end
                nums[pivot_index], nums[right] = nums[right], nums[pivot_index]

                # 2. move all smaller elements to the left
                store_index = left
                for i in range(left, right):
                    if nums[i] < pivot:
                        nums[store_index], nums[i] = nums[i], nums[store_index]
                        store_index += 1

                # 3. move pivot to its final place
                nums[right], nums[store_index] = nums[store_index], nums[right]

                return store_index

            def select(left, right, k_smallest):
                """
                Returns the k-th smallest element of list within left..right
                """
                while left <= right:
                    # select a random pivot_index
                    pivot_index = random.randint(left, right)

                    # find the pivot position in a sorted list
                    pivot_index = partition(left, right, pivot_index)

                    # the pivot is in its final sorted position
                    if k_smallest == pivot_index:
                        return nums[k_smallest]
                    # go left
                    elif k_smallest < pivot_index:
                        right = pivot_index - 1
                    # go right
                    else:
                        left = pivot_index + 1

            # kth largest is (n - k)th smallest
            return select(0, len(nums) - 1, len(nums) - k)
    ```

### Approach 5: Quick Select (Hoare's Selection Algorithm)

    ```python
    class Solution:
        def findKthLargest(self, nums: List[int], k: int) -> int:
            def partition(left, right, pivot_index):
                pivot = nums[pivot_index]
                # 1. move pivot to end
                nums[pivot_index], nums[right] = nums[right], nums[pivot_index]

                # 2. move all smaller elements to the left
                store_index = left
                for i in range(left, right):
                    if nums[i] < pivot:
                        nums[store_index], nums[i] = nums[i], nums[store_index]
                        store_index += 1

                # 3. move pivot to its final place
                nums[right], nums[store_index] = nums[store_index], nums[right]

                return store_index

            def select(left, right, k_smallest):
                """
                Returns the k-th smallest element of list within left..right
                """
                while left <= right:
                    # select a random pivot_index
                    pivot_index = random.randint(left, right)

                    # find the pivot position in a sorted list
                    pivot_index = partition(left, right, pivot_index)

                    # the pivot is in its final sorted position
                    if k_smallest == pivot_index:
                        return nums[k_smallest]
                    # go left
                    elif k_smallest < pivot_index:
                        right = pivot_index - 1
                    # go right
                    else:
                        left = pivot_index + 1

            # kth largest is (n - k)th smallest
            return select(0, len(nums) - 1, len(nums) - k)
    ```
