public class GenericBox {

	public static void withGeneric() {
		BoxWithType<Integer> myBox = new BoxWithType<>();

		myBox.add(10);
		System.out.println(myBox.get());

		//This time, the following code DOES NOT COMPILE!
		//that would be the advantage of having generic code
//	    String s = (String) myBox.get();
//		System.out.println(s); 
	}
	
	public static void main(String[] args) {
		GenericBox.withGeneric();
	}
} 
