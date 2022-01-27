public class Student5Tester {//has package access to Student5 because they are in the same folder!

	public static void printInfo(Student5 student) {
		System.out.println("ID: " + student.getId());
		System.out.println("First Name: " + student.getFirstName());
		System.out.println("Last Name: " + student.getLastName());
		System.out.println("No. of Student objects in memory so far: " + student.getCount());
	}
	
	public static void main(String[] args) {
		//This class has access to class Student5 and could create obj.s ...
		Student5 student1 = new Student5();
		Student5 student2 = new Student5(2, "John", "White");
		
		System.out.println("student1's info: ");
		printInfo(student1);
		
		System.out.println("\nstudent2's info: ");
		printInfo(student2);
	}

}
//What's the problem?!