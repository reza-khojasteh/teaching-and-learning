import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyBytes {

	public static void main(String[] args) throws IOException {
		if (args.length < 2)
			return;

		FileInputStream in = null;
		FileOutputStream out = null;
		try {
			in = new FileInputStream(args[0]);
			out = new FileOutputStream(args[1]);
			int c;

			while ((c = in.read()) != -1) {
				out.write(c);
			}

		} finally {
			if (in != null) {
				in.close();
			}
			if (out != null) {
				out.close();
			}
		}
	}
}
