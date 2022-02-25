import { Component } from 'react';

class NowLoading extends Component {
  render() {
    return <div>Now loading...</div>;
  }
}

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
    list: { items: [], isLoading: false },
    article: {
      item: {
        title: '기술 스택이 표기됩니다.',
        level: '1에서 10까지의 레벨이 표기됩니다.',
        experience: '기술 스택을 연마한 기간이 표기됩니다.',
      },
      isLoading: false,
    },
  };

  componentDidMount() {
    var newList = Object.assign({}, this.state.list, { isLoading: true });
    this.setState({ list: newList });
    fetch('list.json')
      .then((result) => result.json())
      .then((json) =>
        this.setState({ list: { items: json, isLoading: false } })
      );
  }

  render() {
    var NavTag = null;
    this.state.list.isLoading
      ? (NavTag = <NowLoading></NowLoading>)
      : (NavTag = (
          <Nav
            list={this.state.list.items}
            onClick={(id) => {
              var newArticle = Object.assign({}, this.state.article, {
                isLoading: true,
              });
              this.setState({ article: newArticle });
              fetch(`/data/${id}.json`)
                .then((result) => result.json())
                .then((json) => {
                  this.setState({
                    article: {
                      item: {
                        title: json.title,
                        level: json.level,
                        experience: json.experience,
                      },
                      isLoading: false,
                    },
                  });
                });
            }}
          ></Nav>
        ));

    var ArticleTag = null;
    this.state.article.isLoading
      ? (ArticleTag = <NowLoading></NowLoading>)
      : (ArticleTag = (
          <Article
            title={this.state.article.item.title}
            level={this.state.article.item.level}
            experience={this.state.article.item.experience}
          ></Article>
        ));
    return (
      <>
        <h1>로딩중 구현 + 리팩토링 버전</h1>
        {ArticleTag}
        {NavTag}
      </>
    );
  }
}

export default App;
