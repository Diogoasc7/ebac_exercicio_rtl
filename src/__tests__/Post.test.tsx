import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../components/PostComments/index';

test('Deve adicionar dois comentários na tela', () => {
    render(<Post />);

    const textarea = screen.getByTestId('textarea-comment');
    const botao = screen.getByTestId('button-submit');

    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(botao);

    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
    fireEvent.click(botao);

    const comentarios = screen.getAllByTestId('comment-item');
    expect(comentarios).toHaveLength(2);
    expect(comentarios[0]).toHaveTextContent('Primeiro comentário');
    expect(comentarios[1]).toHaveTextContent('Segundo comentário');
});
