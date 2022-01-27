public class Student6Tester {//has package access to Student6 because they are in the same folder!

	public static void printInfo(Student6 student) {
		System.out.println("ID: " + student.getId());
		System.out.println("First Name: " + student.getFirstName());
		System.out.println("Last Name: " + student.getLastName());
	}
	
	public static void main(String[] args) {
		//This class has access to class Student6 and could create obj.s ...
		Student6 student1 = new Student6();
		Student6 student2 = new Student6(2, "John", "White");
		
		System.out.println("student1's info: ");
		printInfo(student1);
		
		System.out.println("\nstudent2's info: ");
		printInfo(student2);
		
		System.out.println("\nNo. of Student objects in memory so far: " + student1.getCount());//OR student2.getCount()
		//OR even better to say: "System.out.println("No. of Student objects in memory so far: " + Student6.getCount());"
	}

}
//Note that static methods can just access static var.s but non-static methods could access both statics and non-statics!
//Also note that static methods could just call other static methods

//And now you should get why the main method should be static in Java
//and also you have a better feeling of the "out" obj. in "System.out.println"; if not, look at the Java api!

//What if we want to define a final var. in our class. Which one is a better option?
//		1- public final String COLLEGE = "Seneca";
//		OR
//		2- public static final String COLLEGE = "Seneca";