import './styles/form.css';
import { useRef, useState } from "react";
import useStock from "../hooks/useStock";
import StockItem, { CATEGORIES } from '../models/StockItem';

export default function ItemForm({ itemToUpdate }) {
    //reset do item sempre que concluir o que fizer UPDATE ou NOVO
    const defaultItem = {
        name: "",
        description: "",
        quantity: 0,
        price: 0,
        category: "",
    };

    //verificando se vai atualizar ou criar um novo
    const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)

    const { AddItem, updateItem, itemsLength } = useStock()    //vem do hook
    const inputRef = useRef(null) //autofocus no input

    //pegar o state atual e somar com o anterior nos imput's
    const handleChange = (ev) => {
        setItem((state) => ({ ...state, [ev.target.name]: ev.target.value }));
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        try {
            //verificando se é atualização ou NOVO
            if (itemToUpdate) {
                updateItem(itemToUpdate.id, item);
                alert("Item atualizado com sucesso!");
        } else {
            const validItem = new StockItem(item, itemsLength)//stockitem vem da classe MODELs
            AddItem(validItem) //FOI PASSADO PRA DENTRO DA MODEL PARA TER ID DINAMICO
            setItem(defaultItem);
            alert("Item cadastrado com sucesso!") //zerar os input´s
        }
        } catch (err) {
            console.log(err.message);
            alert("Ocorreu um erro." + err.message)
        } finally {
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        ref={inputRef}
                        value={item.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        required
                        min={0}
                        step={1}
                        value={item.quantity}
                        onChange={handleChange}
                    />
                </div>
                    <div>
                        <label htmlFor="price">Preço</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            required
                            min={0.0}
                            step={0.01}
                            value={item.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <select
                            name="category"
                            id="category"
                            required
                            value={item.category}
                            onChange={handleChange}
                        >
                            <option disabled value="">
                                Selecione uma categoria...
                            </option>
                            {CATEGORIES.map((category) => (
                            <option
                                key={category}
                                value={category}
                                defaultChecked={item.category === category}
                            >
                                {category}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="description">Descrição</label>
                </div>
                <div className="textArea">
                    <textarea
                        name="description"
                        id="description"
                        required
                        rows={6}
                        value={item.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
            <button className="button is-primary is-large">Salvar</button>
        </form>
    )
}
