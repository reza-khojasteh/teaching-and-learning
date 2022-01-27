public class Matrix {

	//matrix is an array of arrays
	private int nrows;
	private int ncols;
	private int[][] cells;

	//constructor that takes another matrix
	public Matrix(int[][] cells) {
		this.cells = cells;
		this.nrows = cells.length;
		this.ncols = cells[0].length;
	}

	//constructor that defines the number of rows and columns
	public Matrix(int nrows, int ncols) {
		this.nrows = nrows;
		this.ncols = ncols;
		cells = new int[nrows][ncols];
	}

	public String toString() {
		String matrix = "\nmatrix[" + nrows + "][" + ncols + "] = {\n";
		for (int i = 0; i < nrows; i++) {
			for (int j = 0; j < ncols; j++)
				matrix += (" " + cells[i][j] + ",");
			matrix += "\n";
		}
		matrix += "}\n";

		return matrix;
	}

	public static void main(String[] args) {

		int arrayOfArray[][] = {
				{3, 2, 3},
				{5, 9, 8},
		};

		Matrix first = new Matrix(arrayOfArray);
		System.out.println("Matrix = two rows, three columns " + first);

		int[][] another = {
				{0, 1, 2, 3},
		};

		Matrix second = new Matrix(another);
		System.out.print("Matrix = one row, four columns");
		System.out.println(second);

		int[] yetAnother[] = {
				{0},
				{1},
				{2},
		};

		Matrix third = new Matrix(yetAnother);
		System.out.print("Matrix = three rows, one column");
		System.out.println(third);
	}
}