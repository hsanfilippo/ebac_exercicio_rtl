import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentários corretamente', () => {
        const { debug } = render(<PostComment/>)
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'comentario 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit-comentario'))
        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'comentario 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-submit-comentario'))

        expect(screen.getAllByTestId('post-comentario')).toHaveLength(2)
        debug()
    })
});