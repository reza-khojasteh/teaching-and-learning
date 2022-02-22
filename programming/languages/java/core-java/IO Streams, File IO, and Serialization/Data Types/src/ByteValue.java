public class ByteValue {

	public static void main(String[] a) {
//		int takeByte = 0;
		byte minusOneByte = -1;
		int minusOneInteger = -1;

		binaryByte(minusOneByte);
		binaryInt(minusOneInteger);
//		takeByte = minusOneInteger;
//		binaryInt(takeByte);

	}

	public static void binaryInt(int i) {
		System.out.print("   ");
		for(int j = 31; j >= 0; j--)
			if(((1 << j) &  i) != 0)
				System.out.print("1");
			else
				System.out.print("0");
		System.out.println();
	}

	public static void binaryByte(byte b) {
		System.out.print("   ");
		for(int j = 7; j >= 0; j--)
			if((((byte)(1 << j)) &  b) != 0)
				System.out.print("1");
			else
				System.out.print("0");
		System.out.println();
	}
}
