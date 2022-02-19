import java.util.Arrays;

public class Book {
	String title;
	String[] authors;
	int ISBN;

	public Book(String title, String[] authors, int ISBN) {
		this.title = title;
		this.authors = authors;
		this.ISBN = ISBN;
	}

	@Override
	public String toString() {
		return "Book{" +
				"title='" + title + '\'' +
				", authors=" + Arrays.toString(authors) +
				", ISBN=" + ISBN +
				'}';
	}

	public static void main(String[] args) {
		String[] sa = new String[]{ "Peter L.", "Jordan A." };
		Book course = new Book("JavaCourse", sa, 94825321);
		System.out.println(course);
	}
}