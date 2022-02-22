import java.io.*;

public class EchoFile {

	public static void main(String[] args) throws FileNotFoundException {

		BufferedReader in = new BufferedReader(new FileReader(args[0]));

		String s;

		try {

			while ((s = in.readLine()) != null)
				System.out.println(s);

		} catch (IOException e) {

			e.printStackTrace();
		}
	}
}
