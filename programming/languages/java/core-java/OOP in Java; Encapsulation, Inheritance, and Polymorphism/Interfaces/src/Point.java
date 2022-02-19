interface OuterInterface {
	interface InnerInterface {	
		void move();
	}
}

class Point implements OuterInterface.InnerInterface {
	int x, y;

	public Point(int a, int b) {
		x = a; 
		y = b;
	}

	public void move() { 
		x += 1; 
		y += 1; 
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + x;
		result = prime * result + y;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Point other = (Point) obj;
		if (x != other.x)
			return false;
		if (y != other.y)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Point [x=" + x + ", y=" + y + "]";
	}
}
