public class Student3Tester {//has package access to Student3 because they are in the same folder!

	public static void main(String[] args) {
		
		//This class has access to class Student3 and could create obj.s ...
		Student3 student1 = new Student3();
		Student3 student2 = new Student3();
		
		//but this time it has to use setters/getters to have indirect access to its fields/properties which is almost always desirable!
		student1.setId(2);
		
		System.out.printf("student1's ID: %d\n", student1.getId());//Note the use of printf, almost the same as what you had in C
		System.out.println("student2's ID: " + student2.getId());// Note the use of + operator here
	}

}
