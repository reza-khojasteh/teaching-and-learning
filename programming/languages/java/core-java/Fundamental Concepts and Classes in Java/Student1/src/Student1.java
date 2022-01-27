public class Student1 {
	long id;
	String firstName;
	String lastName;

	public static void main(String[] args) {
		Student1 student1 = new Student1();//Using default ctr

		System.out.println(student1.id);
		System.out.println(student1.firstName);//Check what is printed
		System.out.println(student1.lastName);
	}
}

//Although we could define several classes in the same .java file, it's better to define each class in a new file, not like below:

//class AnotherClass {
//	//...
//}
