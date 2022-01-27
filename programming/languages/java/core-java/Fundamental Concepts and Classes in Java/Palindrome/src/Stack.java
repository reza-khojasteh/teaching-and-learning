public class Stack {

	private int position, capacity;
	private char[] stack;

	public Stack(int n) {
		capacity = n;
		position = -1;
		stack = new char[capacity];
	}

	public void push(char obj) {
		// stack is not full
		position++;
		stack[position] = obj;
	}

	public char pop() {
		// stack is not empty
		char temp = stack[position];
		position--;
		return temp;
	}

	public boolean isEmpty() {
		return position == -1;
	}
//
//	public char peek() {
//		return stack[position];
//	}
//
//	public boolean isFull() {
//		return position == capacity - 1;
//	}

}