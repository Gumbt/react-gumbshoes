import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
        <ProductTable>
            <thead>
                <tr>
                    <th/>
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe2.jpg?resize=326:*" alt="Tênis"/>
                    </td>
                    <td>
                        <strong>Tênis muito massa</strong>
                        <span>R$130,50</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1"/>
                            </button>
                            <input type="number" readOnly value={2}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1"/>
                            </button>

                        </div>
                    </td>
                    <td>
                        <strong>R$261,00</strong>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="#9159c1" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </ProductTable>

        <footer>
            <button type="button">Finalizar pedido</button>

            <Total>
                <span>TOTAL</span>
                <strong>R$1500,20</strong>
            </Total>
        </footer>
    </Container>
  );
}
