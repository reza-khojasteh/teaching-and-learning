# first solution with O(nk)
# def kth_largest(lst, k):
#     if k <= 0 or k > len(lst):
#         return None

#     for i in range(k - 1):
#         lst.remove(max(lst))
#     return max(lst)

# second solution with O(nlogn)
# def kth_largest(lst, k):
#     if k <= 0 or k > len(lst):
#         return None

#     lst.sort()
#     return lst[-k]

# third solution with O(n + klog(n))
import heapq


def kth_largest(lst, k):
    if k <= 0 or k > len(lst):
        return None

    lst = [-i for i in lst]
    heapq.heapify(lst)

    for i in range(k - 1):
        heapq.heappop(lst)
    return -heapq.heappop(lst)

    # OR with O(nlog(k)) instead of the above 5 lines!
    # return heapq.nlargest(k, lst)[-1]
