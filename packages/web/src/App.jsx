import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

import { isSupabaseConfigured, supabase } from './supabase';

const agendaEntries = [
  {
    id: 1,
    date: '15/04/2026',
    place: 'Hemocentro',
    reason: 'Profilaxia',
    treatment: 'Fator VIII',
    notes: 'Aplicacao sem intercorrencias.',
  },
  {
    id: 2,
    date: '11/04/2026',
    place: 'Em casa',
    reason: 'Rotina',
    treatment: 'Fator IX',
    notes: 'Acompanhamento registrado pelo responsavel.',
  },
  {
    id: 3,
    date: '08/04/2026',
    place: 'Hospital',
    reason: 'Emergencia',
    treatment: 'Dose complementar',
    notes: 'Observacao clinica realizada apos trauma.',
  },
];

const bleedEntries = [
  {
    id: 1,
    date: '10/04/2026',
    location: 'Joelho esquerdo',
    treatment: 'Repouso, gelo e contato com equipe',
    notes: 'Melhora progressiva apos 24h.',
  },
  {
    id: 2,
    date: '01/04/2026',
    location: 'Tornozelo direito',
    treatment: 'Avaliacao e controle local',
    notes: 'Sem novo episodio no dia seguinte.',
  },
];

function AppShell({ children, session, onSignOut }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">AH</div>
          <div>
            <p className="eyebrow">Agenda Hemofilia</p>
            <h1>Versao web em migracao</h1>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/agenda">Agenda</NavLink>
          <NavLink to="/hemartrose">Hemartrose</NavLink>
          <NavLink to="/funcionalidades">Funcionalidades</NavLink>
        </nav>

        <div className="session-box">
          <span className={`status-pill ${session ? 'status-ok' : 'status-idle'}`}>
            {session ? 'Sessao ativa' : 'Sem sessao'}
          </span>
          {session ? (
            <button className="button button-secondary button-small" type="button" onClick={onSignOut}>
              Sair
            </button>
          ) : null}
        </div>
      </header>

      <main className="page">{children}</main>
    </div>
  );
}

function HomePage() {
  return (
    <div className="stack-xl">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Navegacao publica liberada</p>
          <h2>Agora voce ja consegue testar a versao web com rotas reais.</h2>
          <p className="hero-text">
            Esta etapa entrega paginas de login, agenda e registro de hemartrose
            para voce validar navegacao, hierarquia de informacao e direcao visual
            no navegador, mesmo sem autenticacao ativa ainda.
          </p>

          <div className="hero-actions">
            <NavLink className="button button-primary" to="/login">
              Abrir /login
            </NavLink>
            <NavLink className="button button-secondary" to="/agenda">
              Abrir /agenda
            </NavLink>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-label">O que ja da para validar</p>
          <ul className="status-list">
            <li>Fluxo de entrada com formulario visualmente consistente</li>
            <li>Agenda com cards e formulario de teste</li>
            <li>Area separada para eventos de hemartrose</li>
          </ul>
        </aside>
      </section>

      <section className="grid">
        <article className="card">
          <p className="card-kicker">Teste imediato</p>
          <h3>/login</h3>
          <p>Tela publica para sentir a experiencia de acesso no desktop e mobile.</p>
        </article>
        <article className="card">
          <p className="card-kicker">Teste imediato</p>
          <h3>/agenda</h3>
          <p>Painel com formulario de registro rapido e historico ilustrativo.</p>
        </article>
        <article className="card">
          <p className="card-kicker">Teste imediato</p>
          <h3>/hemartrose</h3>
          <p>Fluxo dedicado para eventos de sangramento e observacoes clinicas.</p>
        </article>
      </section>
    </div>
  );
}

function LoginPage({ session }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogin() {
    if (!isSupabaseConfigured || !supabase) {
      setFeedback('Supabase nao configurado.');
      return;
    }

    setIsSubmitting(true);
    setFeedback('');

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setFeedback(error.message);
    } else {
      setFeedback('Login realizado com sucesso. Agora voce pode abrir /agenda.');
    }

    setIsSubmitting(false);
  }

  return (
    <section className="auth-layout">
      <article className="hero-copy auth-copy">
        <p className="eyebrow">/login</p>
        <h2>Entrar na sua rotina de cuidado</h2>
        <p className="hero-text">
          Esta tela ja representa o ponto de entrada da versao web. Ainda sem
          autenticar de verdade, mas com estrutura pronta para plugar Supabase
          Auth depois.
        </p>
        <ul className="status-list">
          <li>Formulario responsivo</li>
          <li>CTA de cadastro</li>
          <li>Base pronta para sessao real</li>
        </ul>
      </article>

      <article className="card auth-card">
        <p className="card-kicker">Acesso</p>
        <h3>Login</h3>
        {session ? (
          <p className="helper-copy">
            Voce ja esta autenticado com o e-mail <strong>{session.user.email}</strong>.
          </p>
        ) : null}
        <div className="form-grid">
          <label className="field">
            <span>E-mail</span>
            <input
              type="email"
              placeholder="voce@exemplo.com"
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label className="field">
            <span>Senha</span>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={(event) =>
                setFormData((current) => ({ ...current, password: event.target.value }))
              }
            />
          </label>
        </div>

        <div className="button-row">
          <button
            className="button button-secondary"
            type="button"
            onClick={() => {
              setFormData({ email: '', password: '' });
              setFeedback('');
            }}>
            Limpar
          </button>
          <button className="button button-primary" type="button" onClick={handleLogin} disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </div>

        {feedback ? <p className="helper-copy">{feedback}</p> : null}

        <div className="divider" />

        <p className="muted-title">Ainda nao tem acesso?</p>
        <NavLink className="button button-tertiary" to="/cadastro">
          Criar conta
        </NavLink>
      </article>
    </section>
  );
}

function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignUp() {
    if (!isSupabaseConfigured || !supabase) {
      setFeedback('Supabase nao configurado.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFeedback('As senhas nao conferem.');
      return;
    }

    setIsSubmitting(true);
    setFeedback('');

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setFeedback(error.message);
    } else {
      setFeedback('Cadastro enviado. Verifique seu e-mail para confirmar a conta, se essa confirmacao estiver habilitada no Supabase.');
    }

    setIsSubmitting(false);
  }

  return (
    <section className="auth-layout">
      <article className="hero-copy auth-copy">
        <p className="eyebrow">/cadastro</p>
        <h2>Criar acesso para a versao web</h2>
        <p className="hero-text">
          Esta pagina ja conversa com o Supabase Auth e prepara o fluxo de entrada
          real para o projeto.
        </p>
      </article>

      <article className="card auth-card">
        <p className="card-kicker">Cadastro</p>
        <h3>Nova conta</h3>
        <div className="form-grid">
          <label className="field">
            <span>E-mail</span>
            <input
              type="email"
              placeholder="voce@exemplo.com"
              value={formData.email}
              onChange={(event) =>
                setFormData((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label className="field">
            <span>Senha</span>
            <input
              type="password"
              placeholder="Crie uma senha"
              value={formData.password}
              onChange={(event) =>
                setFormData((current) => ({ ...current, password: event.target.value }))
              }
            />
          </label>
          <label className="field field-full">
            <span>Confirmar senha</span>
            <input
              type="password"
              placeholder="Repita a senha"
              value={formData.confirmPassword}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  confirmPassword: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <div className="button-row">
          <button className="button button-primary" type="button" onClick={handleSignUp} disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Criar conta'}
          </button>
        </div>

        {feedback ? <p className="helper-copy">{feedback}</p> : null}
      </article>
    </section>
  );
}

function AgendaPage() {
  const [formData, setFormData] = useState({
    date: '2026-04-15T08:30',
    place: 'Hemocentro',
    reason: 'Profilaxia',
    treatment: 'Fator VIII',
    notes: '',
  });

  const nextEntryPreview = useMemo(
    () => ({
      ...formData,
      date: new Date(formData.date).toLocaleString('pt-BR'),
    }),
    [formData]
  );

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  return (
    <section className="stack-xl">
      <div className="section-heading">
        <p className="eyebrow">/agenda</p>
        <h2>Preview funcional da agenda</h2>
        <p>
          Esta pagina ja mostra como o produto pode se comportar na web: formulario
          em uma coluna e historico em outra, sem depender do layout mobile.
        </p>
      </div>

      <section className="workspace">
        <article className="card workspace-form">
          <p className="card-kicker">Novo registro</p>
          <h3>Registrar infusao</h3>
          <div className="form-grid">
            <label className="field">
              <span>Data e hora</span>
              <input
                type="datetime-local"
                value={formData.date}
                onChange={(event) => updateField('date', event.target.value)}
              />
            </label>
            <label className="field">
              <span>Unidade</span>
              <select
                value={formData.place}
                onChange={(event) => updateField('place', event.target.value)}>
                <option>Hemocentro</option>
                <option>Em casa</option>
                <option>Hospital</option>
              </select>
            </label>
            <label className="field">
              <span>Motivo</span>
              <select
                value={formData.reason}
                onChange={(event) => updateField('reason', event.target.value)}>
                <option>Profilaxia</option>
                <option>Emergencia</option>
                <option>Imunotolerancia</option>
                <option>Cirurgia</option>
              </select>
            </label>
            <label className="field">
              <span>Tratamento</span>
              <select
                value={formData.treatment}
                onChange={(event) => updateField('treatment', event.target.value)}>
                <option>Fator VIII</option>
                <option>Fator IX</option>
                <option>Bypass</option>
              </select>
            </label>
            <label className="field field-full">
              <span>Observacoes</span>
              <textarea
                rows="5"
                placeholder="Descreva detalhes relevantes do registro"
                value={formData.notes}
                onChange={(event) => updateField('notes', event.target.value)}
              />
            </label>
          </div>

          <div className="button-row">
            <button className="button button-secondary" type="button">
              Ver registros
            </button>
            <button className="button button-primary" type="button">
              Salvar
            </button>
          </div>
        </article>

        <aside className="stack-lg">
          <article className="card">
            <p className="card-kicker">Como ficaria agora</p>
            <h3>Preview do proximo item</h3>
            <dl className="summary-list">
              <div>
                <dt>Quando</dt>
                <dd>{nextEntryPreview.date}</dd>
              </div>
              <div>
                <dt>Unidade</dt>
                <dd>{nextEntryPreview.place}</dd>
              </div>
              <div>
                <dt>Motivo</dt>
                <dd>{nextEntryPreview.reason}</dd>
              </div>
              <div>
                <dt>Tratamento</dt>
                <dd>{nextEntryPreview.treatment}</dd>
              </div>
            </dl>
          </article>

          <article className="card">
            <p className="card-kicker">Historico de exemplo</p>
            <h3>Ultimos registros</h3>
            <div className="entry-list">
              {agendaEntries.map((entry) => (
                <article key={entry.id} className="entry-item">
                  <div className="entry-topline">
                    <strong>{entry.date}</strong>
                    <span>{entry.place}</span>
                  </div>
                  <p>{entry.reason}</p>
                  <p>{entry.treatment}</p>
                  <small>{entry.notes}</small>
                </article>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </section>
  );
}

function BleedPage() {
  return (
    <section className="stack-xl">
      <div className="section-heading">
        <p className="eyebrow">/hemartrose</p>
        <h2>Registro web de hemartrose</h2>
        <p>
          Separei essa rota para voce testar como o fluxo clinico pode morar na
          web sem parecer uma tela mobile esticada.
        </p>
      </div>

      <section className="workspace workspace-bleed">
        <article className="card workspace-form">
          <p className="card-kicker">Novo evento</p>
          <h3>Registrar sangramento</h3>
          <div className="form-grid">
            <label className="field">
              <span>Data e hora</span>
              <input type="datetime-local" defaultValue="2026-04-15T10:00" />
            </label>
            <label className="field">
              <span>Local do sangramento</span>
              <input type="text" placeholder="Ex.: joelho esquerdo" />
            </label>
            <label className="field field-full">
              <span>Medidas preventivas ou tratativas</span>
              <textarea rows="4" placeholder="Descreva o que foi feito" />
            </label>
            <label className="field field-full">
              <span>Observacoes</span>
              <textarea rows="5" placeholder="Inclua contexto clinico relevante" />
            </label>
          </div>

          <div className="button-row">
            <button className="button button-secondary" type="button">
              Ver historico
            </button>
            <button className="button button-primary" type="button">
              Salvar
            </button>
          </div>
        </article>

        <aside className="card">
          <p className="card-kicker">Historico de exemplo</p>
          <h3>Eventos recentes</h3>
          <div className="entry-list">
            {bleedEntries.map((entry) => (
              <article key={entry.id} className="entry-item">
                <div className="entry-topline">
                  <strong>{entry.date}</strong>
                  <span>{entry.location}</span>
                </div>
                <p>{entry.treatment}</p>
                <small>{entry.notes}</small>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </section>
  );
}

function ProtectedRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function FeaturesPage() {
  return (
    <section className="stack-lg">
      <div className="section-heading">
        <p className="eyebrow">Estrutura inicial</p>
        <h2>O que esta web ja cobre</h2>
        <p>
          O foco aqui continua sendo criar uma base correta de produto web antes de
          voltar a consolidar o mobile.
        </p>
      </div>

      <div className="grid">
        <article className="card">
          <h3>Rotas reais de validacao</h3>
          <p>Voce ja pode abrir `/login`, `/agenda` e `/hemartrose` no navegador.</p>
        </article>
        <article className="card">
          <h3>Layout orientado a desktop</h3>
          <p>
            Formularios e historico lado a lado, com comportamento fluido em telas
            menores.
          </p>
        </article>
        <article className="card">
          <h3>Base pronta para integrar dados</h3>
          <p>
            Proxima etapa natural: ligar Supabase Auth e persistencia real dos
            registros.
          </p>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setAuthReady(true);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
      setAuthReady(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
  }

  return (
    <AppShell session={session} onSignOut={handleSignOut}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage session={session} />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route
          path="/agenda"
          element={
            <ProtectedRoute session={authReady ? session : null}>
              <AgendaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hemartrose"
          element={
            <ProtectedRoute session={authReady ? session : null}>
              <BleedPage />
            </ProtectedRoute>
          }
        />
        <Route path="/funcionalidades" element={<FeaturesPage />} />
      </Routes>
    </AppShell>
  );
}
