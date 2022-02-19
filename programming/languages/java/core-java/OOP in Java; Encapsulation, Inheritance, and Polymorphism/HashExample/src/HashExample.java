//how to calculate hash for primitive data type and objects
import java.util.Arrays;

class Example1 {
	//how to calculate hash for byte, short, int, and char
	byte b = 127;
	short x = 1;
	int y = 10;
	char c = 'h';

	public int hashCode() {
		int result = (int) b;
		result = 31 * result + (int) x;
		result = 31 * result + y;
		result = 31 * result + (int) c;
		return result;
	}
}

class Example2 {
	//how to calculate hash for long, float, and double
	long x = 1L;
	float f = 1.3f;
	double y = 2.3;


	public int hashCode() {
		int result;
		long temp;
		result = (int) (x ^ (x >>> 32));
		result = 31 * result + (f != +0.0f ? Float.floatToIntBits(f) : 0);
		temp = Double.doubleToLongBits(y);
		result = 31 * result + (int) (temp ^ (temp >>> 32));
		return result;
	}
}

class Example3 {
	//how to calculate hash for String and Boolean
	String s = "example";
	Boolean b = true;

	public int hashCode() {
		int result = s != null ? s.hashCode() : 0;
		result = 31 * result + (b != null ? b.hashCode() : 0);
		return result;
	}
}

class Example4 {
	//how to calculate hash for arrays
	int[] array = {1,2,3,4};
	String[] strArray = {"A", "B"};
	byte[][] matrix = { {1,2}, {3,4}, {5,6} };


	public int hashCode() {
		int result = Arrays.hashCode(array);
		result = 31 * result + Arrays.hashCode(strArray);
		result = 31 * result + Arrays.deepHashCode(matrix);
		return result;
	}
}

public class HashExample {

	public static void main(String[] args) {
		System.out.println(new Example1().hashCode());
		System.out.println(new Example2().hashCode());
		System.out.println(new Example3().hashCode());
		System.out.println(new Example4().hashCode());
	}
}