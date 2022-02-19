import java.util.Arrays;

public class BookHashCode {
	String title;
	String[] authors;
	int ISBN;

	public BookHashCode(String title, String[] authors, int ISBN) {
		this.title = title;
		this.authors = authors;
		this.ISBN = ISBN;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookHashCode other = (BookHashCode) obj;
		if (ISBN != other.ISBN)
			return false;
		if (!Arrays.equals(authors, other.authors))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ISBN;
		result = prime * result + Arrays.hashCode(authors);
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		return result;
	}

	public static void main(String[] args) {
		String[] sa = new String[]{ "Peter L.", "Jordan A." };
		
		String[] sb = new String[]{ "Peter L.", "Jordan A." };
		BookHashCode course = new BookHashCode("JavaCourse", sa, 94825320);
		BookHashCode course1 = new BookHashCode("JavaCourse", sb, 94825321);

		System.out.println(course1.equals(course));
		System.out.println(course1 == course);
		System.out.println(course.hashCode());
		System.out.println(course1.hashCode());
	}
}
