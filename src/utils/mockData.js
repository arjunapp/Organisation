import Pretender from 'pretender';

const mockData = (dataFlat)=>{
new Pretender(function() {
  this.get('/api/employees', request => {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(dataFlat),
    ];
  });
});
}
export default mockData;