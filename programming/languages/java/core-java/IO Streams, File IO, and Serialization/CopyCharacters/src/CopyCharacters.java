import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CopyCharacters {

	public static void main(String[] args) throws IOException {

		if (args.length < 2)
			return;

		FileReader inputStream = null;
		FileWriter outputStream = null;

		try {
			inputStream = new FileReader(args[0]);
			outputStream = new FileWriter(args[1]);

			int c;
			while ((c = inputStream.read()) != -1) {
				outputStream.write(c);
			}
		} finally {
			if (inputStream != null) {
				inputStream.close();
			}
			if (outputStream != null) {
				outputStream.close();
			}
		}
	}
}
