class ExampleTwo {
	public static void main(String[] args) {
		Student student = new Student("John");
		Exam exam = s -> s + ": Passed";
		System.out.println(ExampleOne.result(student, exam));
	}
}