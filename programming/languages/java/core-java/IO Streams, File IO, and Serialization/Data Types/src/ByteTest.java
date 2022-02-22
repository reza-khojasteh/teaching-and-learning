//Did you get the answer to the slide's last Q?
public class ByteTest {

	public static void main(String[] args) {

		for (int i = 0; i < 256; i++) {
			byte signedByte = (byte) i;
			int unsignedByte = signedByte >= 0 ? signedByte : 256 + signedByte;
			System.out.println(unsignedByte + "\t" + signedByte);
		}
	}
}
