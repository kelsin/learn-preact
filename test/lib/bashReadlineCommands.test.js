import { expect } from 'chai';
import functions from '../../src/lib/bashReadlineCommands';

describe('bashReadlineCommands', function() {

	describe('beginning-of-line()', function() {
		const fn = functions['beginning-of-line'];
		it('should place the caret at the beginning of the line', function() {
			const res = fn('abcdefg', 5, 5);
			expect(res.caretStart).to.be.equal(0);
			expect(res.caretEnd).to.be.equal(0);
		});

		it('should return the original string', function() {
			const res = fn('abcdefg', 5, 5);
			expect(res.msg).to.be.equal('abcdefg');
		});
	});

	describe('end-of-line()', function() {
		const fn = functions['end-of-line'];
		it('should place the caret at the end of the line', function() {
			const res = fn('abcdefg', 5, 5);
			expect(res.caretStart).to.be.equal(7);
			expect(res.caretEnd).to.be.equal(7);
		});

		it('should return the original string', function() {
			const res = fn('abcdefg', 5, 5);
			expect(res.msg).to.be.equal('abcdefg');
		});
	});

	describe('unix-line-discard()', function() {
		const fn = functions['unix-line-discard'];
		it('should remove all characters previous to caret', function() {
			const res = fn('abcdefg', 3, 3);
			expect(res.msg).to.be.equal('defg');
		});

		it('should place the caret at the beginning of the line', function() {
			const res = fn('abcdefg', 5, 5);
			expect(res.caretStart).to.be.equal(0);
			expect(res.caretEnd).to.be.equal(0);
		});

		it('should do nothing if given an empty string', function() {
			const res = fn('', 0, 0);
			expect(res.msg).to.be.equal('');
			expect(res.caretStart).to.be.equal(0);
			expect(res.caretEnd).to.be.equal(0);
		});
	});
});
