//the advantage of using generics in Java is to have
//stronger type checkings at compile time
public class OldBox {

	public static void withoutGeneric() {
		Box myBox = new Box();

		myBox.add(10);//note: 10 as an object?!

		Integer val = (Integer) myBox.get();//note the downcast
		System.out.println(val);
		
		//now, there would be a problem at run-time if
//		String s = (String) myBox.get();
//		System.out.println(s);
	}
	
	public static void main(String[] args) {
		OldBox.withoutGeneric();
	}
}
