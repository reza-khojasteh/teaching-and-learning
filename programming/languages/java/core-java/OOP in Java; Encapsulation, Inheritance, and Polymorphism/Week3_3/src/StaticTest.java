//Static methods are inherited but can not be overridden!
//You might be able to define the same static method 
//(with the same name and signature) in the sub class, 
//but that's not overriding. 
//And that's because static methods stick to the class which they are defined in; 
//that's again why you would not be able to put "@Override" annotation 
//before their method declaration in the sub class. 
//It's a simple code for testing this idea.
public class StaticTest {

	public static void main(String[] args) {
		A a1 = new A();
		System.out.println("Testing static f and non-static g methods via the super type var (A) refering to a super type obj (A): ");
		a1.f();
		a1.g();
		
		A a2 = new B();
		System.out.println("Testing static f and non-static g methods via the super type var (A) refering to a direct sub type obj (B): ");
		a2.f();
		a2.g();
		
		A a3 = new C();
		System.out.println("Testing static f and non-static g methods via the super type var (A) refering to an indirect sub type obj (C): ");
		a3.f();
		a3.g();
		
		B b1 = new B();
		System.out.println("Testing static f and non-static g methods via the direct sub type var (B) refering to a direct sub type obj (B): ");
		b1.f();
		b1.g();
		
		B b2 = new C();
		System.out.println("Testing static f and non-static g methods via the direct sub type var (B) refering to an indirect sub type obj (C): ");
		b2.f();
		b2.g();
		
		C c = new C();
		System.out.println("Testing static f and non-static g methods via the indirect sub type var (C) refering to an indirect sub type obj (C): ");
		c.f();
		c.g();

		System.out.println("Testing static f method via the class-names.f() directly: ");
		A.f();
		B.f();
		C.f();
	}

}