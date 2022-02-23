import java.io.*;

public class TestSerial {

	public static void main(String args[]) {

		Test anObj = new Test("This is a testing string for serialization", 777);

		try {

			FileOutputStream fos = new FileOutputStream("file.out");

			ObjectOutputStream oos = new ObjectOutputStream(fos);

			oos.writeObject(anObj);

			oos.flush();
			fos.close();

			System.out.println("Serialization--writeObject string: " + anObj.getString());
			System.out.println("Serialization--writeObject int: " + anObj.getInt());
		} catch (Throwable e) {
			System.err.println(e);
		}
	}
}
