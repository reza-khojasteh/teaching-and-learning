public class Outer {

	private int x;
	private int y;

	private Outer(int x, int y) {
		this.x = x;
		this.y = y;
	}


	public Outer(int x, int y, int z) {
		this(x, y);
	}

	public static void main(String[] args) {
		Outer outer = new Outer(1, 2, 3);

		Outer.Inner inner = new Outer(10, 20, 30).new Inner(30);
		System.out.println(" outer.x = " + outer.x +
				" inner.x = " + inner.x +
				" outer.y = " + outer.y);
	}

	class Inner {

		private int x;

		public Inner(int x) {
			this.x = x;
		}
	}
}