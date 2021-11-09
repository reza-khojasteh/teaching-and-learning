public class ExampleOne {

	public static String result(Student s, Exam e) {
		return e.getExamResult(s.name);
	}

	public static void main(String[] args) {
		System.out.println(result(new Student("John"), new Exam() {
			public String getExamResult(String name) {
				return name + ": Passed";
			}
		}));
	}
}
