public class TestArrays {
	
	public static void main(String[] args) {
		//1D Array and Pass By Value
		int[] arr = {1, 2, 3};
		
		for (int j = 0; j < arr.length; j++) {
			System.out.print(arr[j] + " ");
		}
		System.out.println();
		
		change(arr);

		for (int j = 0; j < arr.length; j++) {
			System.out.print(arr[j] + " ");
		}
		System.out.println();

		//2D Array and Traverse
		int[][] arr2D = { {1, 2, 3}, {4, 5}, {6} };
		
		for (int i = 0; i < arr2D.length; i++) {//rows
			for (int j = 0; j < arr2D[i].length; j++) {//columns
				System.out.printf("%d ", arr2D[i][j]);
			}
			System.out.println();
		}
		
		for (int[] row : arr2D) {
			for (int i : row) {
				System.out.printf("%d ", i);
			}
			System.out.println();
		}
	}
	
	public static void change(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			arr[i] *= 2;
		}
	}

}
