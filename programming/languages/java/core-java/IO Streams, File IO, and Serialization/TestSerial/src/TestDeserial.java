import java.io.*;

public class TestDeserial {

	public static void main(String args[]) {

		Test testobj = null;

		try {

			FileInputStream fis = new FileInputStream("file.out");

			ObjectInputStream ois = new ObjectInputStream(fis);

			testobj = (Test)ois.readObject();

			fis.close();

		} catch (Throwable e) {
			System.err.println(e);
		}
		System.out.println("Deserialization--readObject string: " + testobj.getString());
		System.out.println("Deserialization--readObject int: " + testobj.getInt());
	}
}
