{/* <div id="parent">
  <div id="child1">
    <h1>I am h1 tag</h1>
    <h1>I am h1 tag</h1>
  </div>
  <div id="child2">
    <h1>I am h1 tag</h1>
    <h1>I am h1 tag</h1>
  </div>
</div> */}

const heading = React.createElement ('div', {id: 'parent'}, [
    React.createElement ('div', {id: 'child1', key:'div1'}, [
        React.createElement ('h1', {key:'h1tag'}, 'I am h1 tag'),
        React.createElement ('h1', {key:'h2tag'}, 'I am h1 tag')
    ]),
    React.createElement ('div', {id: 'child2', key:'div2'}, [
        React.createElement ('h1', {key:'h3tag'}, 'I am h1 tag'),
        React.createElement ('h1', {key:'h4tag'}, 'I am h1 tag')
    ])
]);


// JSX

console.log(heading);

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (heading);
