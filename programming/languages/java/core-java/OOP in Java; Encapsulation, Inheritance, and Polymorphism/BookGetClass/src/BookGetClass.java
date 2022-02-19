public class BookGetClass {
	String title;
	String[] authors;
	int ISBN;

	public BookGetClass(String title, String[] authors, int ISBN) {
		this.title = title;
		this.authors = authors;
		this.ISBN = ISBN;
	}

	public static void main(String[] args) {
		String[] sa = new String[]{"Peter L.", "Jordan A."};
		BookGetClass course = new BookGetClass("JavaCourse", sa, 94825321);
		System.out.println(course.getClass());
	}
}