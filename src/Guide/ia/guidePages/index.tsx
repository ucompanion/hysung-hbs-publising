import React from 'react';
import { NavLink } from 'react-router';
import '../assets/css/import.css';
import Header from '../components/header';

const GuidePages = () => {
	return (
		<div className="g-wrap ia-wrap">
			<Header></Header>
			<div className="ia-container">
				<div className="ia-content">
					<section className="ia-section ia-section-data">
						<div className="ia-section-header">
							<h2 className="ia-h2"><a href="#this" className="accordion-toggle">가이드</a></h2>
							<div className="ia-legend">
								<span className="item"><em>총 페이지 : </em><em className="legend-total">0</em>,</span>
								<span className="item c-done"><em>완료 : </em><em className="legend-complete">0</em>,</span>
								<span className="item"><em>진척률 : </em><em className="legend-process">0</em></span>
							</div>
						</div>
						<div className="ia-section-body">
							<div className="ia-tab-content type-thumb">
								<div className="ia-iframe-wrap">
									<div className="ia-iframe-list"></div>
								</div>
							</div>
							<div className="ia-tab-content type-list is-visible">
								<div className="tbl ia-tbl">
									<table>
										<caption>
											<strong>제목 정보</strong>
											<p>제목1, 제목2, 제목3 항목으로 구성됨</p>
										</caption>
										<thead>
											<tr>
												<th scope="col">번호</th>
												<th scope="col" className="col-1depth">1Depth</th>
												<th scope="col" className="col-2depth">2Depth</th>
												<th scope="col" className="col-3depth">3Depth</th>
												<th scope="col" className="col-point">구분</th>
												<th scope="col" className="col-url">URL</th>
												<th scope="col" className="col-complete">상태</th>
												<th scope="col" className="col-memo">비고</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="col-num"></td>
												<td className="col-1depth">Components</td>
												<td className="col-2depth">Accordion</td>
												<td className="col-3depth"></td>
												<td className="col-type" data-type=""></td>
												<td className="col-url"></td>
												<td className="col-complete" data-complete="대기"></td>
												<td className="col-memo">
													<p>2025-04-08 조찬기 : 초안 완료</p>
												</td>
											</tr>
										</tbody>
										<tbody>
											<tr>
												<td className="col-num"></td>
												<td className="col-1depth">Contents</td>
												<td className="col-2depth">Info</td>
												<td className="col-3depth"></td>
												<td className="col-type" data-type=""></td>
												<td className="col-url">guide/components/info.html</td>
												<td className="col-complete" data-complete="대기"></td>
												<td className="col-memo">
													<p>2025-04-15 조찬기 : 초안 완료</p>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
export default GuidePages;