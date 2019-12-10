describe('Split Array function', function() {
  it('is able to split an array into two halves - even array', function() {
    const array = [1,2,3,4,5,6]
    expect(split(array)).toEqual([[1,2,3], [4,5,6]])
  });

  it('is able to split an array into two halves - odd array', function() {
    const array = [1,2,3,4,5]
    expect(split(array)).toEqual([[1,2], [3,4,5]])
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect (merge([1,2],[3,4])).toEqual([1,2,3,4])
  });

  it('is able to merge two sorted arrays into one sorted array if arrays are not already sorted', function(){
    expect (merge([1,4],[2,3])).toEqual([1,2,3,4])
  });

  it('is able to merge two sorted arrays into one sorted array if arrays have different lengths', function(){
    expect (merge([1,4,7],[2,3])).toEqual([1,2,3,4,7])
  });
});