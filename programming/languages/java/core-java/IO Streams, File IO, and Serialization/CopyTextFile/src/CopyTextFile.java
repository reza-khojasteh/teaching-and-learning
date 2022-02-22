import java.io.*;

public class CopyTextFile {

	public static void main(String[] args) throws IOException {

		if (args.length < 2) {
			System.out.println("usage: Copy  ");
			System.exit(0);
		}
		File inputFile = new File(args[0]);
		File outputFile = new File(args[1]);

		FileReader in = null;
		FileWriter out = null;
		int c = 0;

		try {
			in = new FileReader(inputFile);
			out = new FileWriter(outputFile);

			while ((c = in.read()) != -1)
				out.write(c);

		} catch (FileNotFoundException e) {
			System.out.println("File: " + args[0] + " does not exist");
			System.exit(0);
		} finally {
			if (in != null)
				in.close();
			if (out != null)
				out.close();
		}
	}
}
