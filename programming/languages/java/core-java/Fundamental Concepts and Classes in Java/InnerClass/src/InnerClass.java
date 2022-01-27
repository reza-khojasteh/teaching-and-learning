public class InnerClass {
	private int i = 10;

	private class Inner {
		private int j = 20;
	}

	public static void main(String[] args) {
		InnerClass.Inner ref = new InnerClass().new Inner();
		System.out.print(ref.j);
	}
}
