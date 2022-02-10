class B extends A {
	public static void f() {
		System.out.println("f in B");
	}
	
	@Override
	public void g() {
		System.out.println("g in B");
	}
}