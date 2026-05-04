import { supabase } from './supabase';

export async function exibirProdutos() {
    const { data, error } = await supabase
    .from('porduto')
    .select('*');

    if (error) {
        console.log('ero ao buscar produtos:', error);
        return [];
    }
    return data;
}