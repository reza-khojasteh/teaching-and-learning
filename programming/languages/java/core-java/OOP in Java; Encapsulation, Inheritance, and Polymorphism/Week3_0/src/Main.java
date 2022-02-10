public class Main {
	
	public static void main(String[] args) {
		//relationships between subclasses and superclasses:
		
		//1
		Base b1 = new Base();
		System.out.println(b1.getI());
		
		//2
		Extended e1 = new Extended();
		System.out.println(e1.getI());//Pay attention to inheritance in here!
		System.out.println(e1.getJ());
		
		//3
		Base b2 = new Extended();//Inheritance relationship
		System.out.println(b2.getI());//OK
//		System.out.println(b2.getJ());//Not allowed!

		//4
//		Extended e2 = new Base();//Not allowed!
		
//		Extended e3 = (Extended) b1;//Creates ClassCastException
		
		Extended e4 = (Extended) b2;//This time OK!
		System.out.println(e4.getI());
		System.out.println(e4.getJ());
		
		//but you could make it even safer:
		if (b2 instanceof Extended) {
			Extended e5 = (Extended) b2;
			System.out.println(e5.getI());
			System.out.println(e5.getJ());
		}
		
	}

}
