// Java code to print all possible subsequences for a given Array using recursion

import java.util.*;

class FindAllSubsequences {  
    public static void findAllSubsequences(char[] array, int index, ArrayList<Character> subsequence)
    {
        // Print the subsequence when reaching a leaf in the call tree
        if (index == array.length)
        {
            // Condition to avoid printing empty subsequence
            if (subsequence.size() > 0)
                System.out.println(subsequence);
        }
        else
        {
            // 1-a: Add the element at the current index of the array to the beginning of the next-to-be-formed subsequences
            subsequence.add(array[index]);

            // 1-b: Find all subsequences which do include the element at the current index of the array
            findAllSubsequences(array, index + 1, subsequence);
            
            // 2-a: Remove the element at the current index of the array from the beginning of the next-to-be-formed subsequences
            subsequence.remove(subsequence.size() - 1);
            
            // 2-b: And find all subsequences which don't include the element at the current index of the array
            findAllSubsequences(array, index + 1, subsequence);
        }
    }

    // Testing
    public static void main(String[] args)
    {
        char[] array = { 'a', 'b', 'c' };
        ArrayList<Character> subsequence = new ArrayList<>();
        
        findAllSubsequences(array, 0, subsequence);
    }
}
