import java.io.*;

class CountSpace {
	public static void main(String[] args) throws IOException {

		Reader in;
		if (args.length == 0)
			in = new InputStreamReader(System.in);
		else
			in = new FileReader(args[0]);

		int ch;
		int total;

		int spaces = 0;
		for (total = 0; (ch = in.read()) != -1; total++) {
			if (Character.isWhitespace((char) ch))
				spaces++;
		}
		System.out.println(total + " chars, " + spaces + " spaces");
	}
}
