class Point  {
	private int x, y;

	public Point(int a, int b) {
		x = a;
		y = b;
	}

	public void move(int a, int b) {
		x += a;
		y += b;
	}

	public String toString() {
		return "(" + x + ", " + y + ")";
	}	
}
