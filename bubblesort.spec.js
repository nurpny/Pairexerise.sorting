const sampleArray = [2,5,1,4,8,6]
const singleArray = ['g']


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([])  ).toEqual( [] );
  });

  it('handles an single element arry', function(){
    expect( bubbleSort(singleArray)  ).toEqual( singleArray );
  });

  it('returns a sorted array', function(){
    expect (bubbleSort([2,5,1,4,8,6])).toEqual(sampleArray.sort())
  })
});
