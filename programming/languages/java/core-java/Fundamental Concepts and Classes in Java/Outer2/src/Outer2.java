public class Outer2 {

	private int x;
	private int y;

	class Inner {
		private int x;

		public Inner(int x) {
			this.x = x;
		}
	}

	public Outer2(int x, int z, int y) {
		this.y = y;
		x = z;
	}

	private Outer2(int x, int y) {
		this.x = x;
		this.y = y;
	}

	public static void main(String[] args) {
		Outer2 outer = new Outer2(1, 2);
		Outer2.Inner inner = new Outer2(10, 20).new Inner(30);
		System.out.println(outer.x + inner.x + outer.y);
	}
}