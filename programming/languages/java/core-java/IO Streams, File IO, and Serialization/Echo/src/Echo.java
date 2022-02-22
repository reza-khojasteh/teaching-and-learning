import java.io.*;

public class Echo {

	public static void main(String[] args) {

		BufferedReader d = new BufferedReader(new InputStreamReader(System.in));

		String s;
		try {
			while ((s = d.readLine()).length() != 0)
				System.out.println(s);
			// An empty line terminates the program
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
