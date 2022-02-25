import { Component } from 'react';

class Nav extends Component {
  render() {
    const listTag = this.props.list.map((item) => (
      <li key={item.id}>
        <a
          href={item.id}
          data-id={item.id}
          onClick={(e) => {
            e.preventDefault();
            this.props.onClick(e.target.dataset.id);
          }}
        >
          {item.title}
        </a>
      </li>
    ));
    return <nav>{listTag}</nav>;
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>기술 스택: {this.props.title}</h2>
        <h3>숙련도: {this.props.level}</h3>
        <h3>기간: {this.props.experience}</h3>
      </article>
    );
  }
}

class App extends Component {
  state = {
    list: [],
    article: {
      title: '기술 스택이 표기됩니다.',
      level: '1에서 10까지의 레벨이 표기됩니다.',
      experience: '기술 스택을 연마한 기간이 표기됩니다.',
    },
  };

  componentDidMount() {
    fetch('list.json')
      .then((result) => result.json())
      .then((json) => this.setState({ list: json }));
  }

  render() {
    return (
      <>
        <h1>리팩토링 버전</h1>
        <Article
          title={this.state.article.title}
          level={this.state.article.level}
          experience={this.state.article.experience}
        ></Article>
        <Nav
          list={this.state.list}
          onClick={(id) => {
            fetch(`/data/${id}.json`)
              .then((result) => result.json())
              .then((json) => {
                this.setState({
                  article: {
                    title: json.title,
                    level: json.level,
                    experience: json.experience,
                  },
                });
              });
          }}
        ></Nav>
      </>
    );
  }
}

export default App;
