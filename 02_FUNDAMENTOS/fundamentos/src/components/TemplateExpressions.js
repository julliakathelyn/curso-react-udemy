const TemplateExpressions = () => {

    const name = 'Jullia';
    const data = {
        age: 25,
        job: 'Programadora'
    }

    return (
        <div>
          <h1> Ola {name}, tudo bem?</h1>
          <p>voce atua como {data.job}</p>
          <p>{4 + 4}</p>
        </div>
    )
}

export default TemplateExpressions;